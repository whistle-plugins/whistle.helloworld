require('bootstrap/dist/css/bootstrap.css');
require('../css/index.css');
var React = require('react');
var ReactDOM = require('react-dom');
// The plugin's page does not support Websocket and can only use polling
var socket = io.connect('/', { transports: ['polling'] });
var index = 0;

function getKey() {
	return ++index;
}

var Index = React.createClass({
	getInitialState: function() {
		return {
			list: []
		};
	},
	atBottom: function() {
		var content = ReactDOM.findDOMNode(this.refs.content);
		var listContent = ReactDOM.findDOMNode(this.refs.listContent);
		return content.scrollTop + content.offsetHeight + 5 > listContent.offsetHeight;
	},
	scrollToBottom: function() {
		ReactDOM.findDOMNode(this.refs.content).scrollTop = ReactDOM.findDOMNode(this.refs.listContent).offsetHeight;
	},
	componentDidMount: function() {
		var self = this;
		var list = self.state.list;
		socket.on('data', function (data) {
			  list.push(data);
			  var len = list.length - 600;
			  if (len > 0) {
				  list.splice(0, len);
			  }
			  var bottom = self.atBottom();
			  self.setState({
				  list: list
			  }, function() {
				  bottom && self.scrollToBottom();
			  });
		});
	},
	render: function() {
		var list = this.state.list;
		return (
				<div className="orient-vertical-box container">
					<table className="table">
						<thead>
							<tr>
								<th className="req-order">#</th>
								<th className="req-url">Url</th>
								<th className="req-method">Method</th>
								<th className="req-rule-value">Rule Value</th>
							</tr>
						</thead>
					</table>
					<div ref="content" className="content fill">
						<table ref="listContent" className="table">
							<tbody>
								{
									list.map(function(item) {
										if (!item.key) {
											item.key = getKey();
										}
										
										return (
											<tr key={item.key}>
												<td className="req-order">{item.key}</td>
												<td className="req-url" title={item.url}>{item.url}</td>
												<td className="req-method" title={item.method}>{item.method}</td>
												<td className="req-rule-value" title={item.ruleValue}>{item.ruleValue}</td>
											</tr>	
										);
									})
								}
							</tbody>
						</table>
					</div>
				</div>
		);
	}
});

ReactDOM.render(<Index />, document.getElementById('main'));