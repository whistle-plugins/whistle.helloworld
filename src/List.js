import React, { Component } from 'react';

const docElem = document.documentElement;
const { body } = document;
const MAX_LEN = 100;
const MAX_DIS = 5;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  componentDidMount() {
    const fetchData = () => {
      if (!this.isAtBottom()) {
        return setTimeout(fetchData, 300);
      }
      let { list } = this.state;
      const len = list.length;
      const lastItem = list[len - 1];
      fetch(`cgi-bin/list?lastId=${lastItem ? lastItem.reqId : ''}&${Date.now()}`)
        .then(res => res.json())
        .then((data) => {
          list.push(...data);
          const exceed = len - MAX_LEN;
          if (exceed > 30) {
            list = list.slice(exceed);
          }
          const isAtBottom = this.isAtBottom();
          this.setState({ list }, () => {
            if (isAtBottom) {
              docElem.scrollTop = 100000000000;
            }
            setTimeout(fetchData, 1000);
          });
        }).catch(() => setTimeout(fetchData, 2000));
    };
    fetchData();
  }
  isAtBottom() {
    return body.clientHeight < docElem.scrollTop + docElem.clientHeight + MAX_DIS;
  }
  render() {
    const self = this;
    const { list } = self.state;
    return (
      <table className="p-servers">
        <thead>
          <tr>
            <th>#</th>
            <td className="p-url">URL</td>
            <td className="p-basic-info">Basic Info</td>
            <td className="p-server-info">Plugin Server Status</td>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item) => {
              let { index } = item;
              if (!index) {
                index = self.index || 0;
                ++index;
                self.index = index;
                item.index = index;
              }
              return (
                <tr key={item.reqId}>
                  <th>{index}</th>
                  <td style={{ wordBreak: 'break-all', wordWrap: 'break-word' }}>{item.url}</td>
                  <td>
                    <p><strong>ID:</strong> {item.reqId}</p>
                    <p><strong>ClientIP:</strong> {item.clientIp}</p>
                    <p><strong>RuleValue:</strong> {item.ruleValue}</p>
                    <p><strong>Method:</strong> {item.method}</p>
                    <p><strong>ServerIP:</strong> {item.serverIp}</p>
                    <p><strong>StatusCode:</strong> {item.statusCode}</p>
                  </td>
                  <td>
                    {
                      Object.keys(item.servers).map((name) => {
                        return <p key={name}>√ {name}</p>;
                      })
                    }
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

export default List;
