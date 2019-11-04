import React from "react";

class ReactConditionalRender2 extends React.Component {
  constructor() {
    super();
    this.state = {
      unreadMessages: ["First message", "Second message"],
      readedMessages: []
    };
  }

  render() {
    return (
      <div>
        {this.state.unreadMessages.length > 0 && (
          <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        )}

        {this.state.readedMessages.length > 0 && (
          <h2>You have {this.state.readedMessages} readed message</h2>
        )}
      </div>
    );
  }
}

export default ReactConditionalRender2;
