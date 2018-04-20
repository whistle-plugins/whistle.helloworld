import React, { Component } from 'react';

class List extends Component {
  componentDidMount() {
    fetch('cgi-bin/list')
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {

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
          <tr>
            <td></td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default List;