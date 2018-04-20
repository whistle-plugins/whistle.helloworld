import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }
  componentDidMount() {
    const fetchData = () => {
      const { list } = this.state;
      const len = list.length;
      const lastItem = list[len - 1];
      fetch(`cgi-bin/list?lastId=${lastItem ? lastItem.reqId : ''}&${Date.now()}`)
        .then(res => res.json())
        .then((data) => {
          list.push(...data);
          const exceed = len - 300;
          if (exceed > 0) {
            list.splice(0, exceed);
          }
          this.setState({ list });
          setTimeout(fetchData, 1000);
        }).catch(() => setTimeout(fetchData, 2000));
    };
    fetchData();
  }
  render() {
    const { list } = this.state;
    return (
      <table className="p-servers">
        <thead>
          <tr>
            <td className="p-url">URL</td>
            <td className="p-basic-info">Basic Info</td>
            <td className="p-server-info">Plugin Server Status</td>
          </tr>
        </thead>
        <tbody>
          {
            list.map(item => (
              <tr key={item.reqId}>
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
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default List;
