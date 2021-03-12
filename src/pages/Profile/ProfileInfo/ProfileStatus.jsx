import React, {Component} from 'react'

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (event) => {
    this.setState({
      status: event.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {!this.state.editMode
          ? <span onDoubleClick={this.activateEditMode}>{this.props.status || '___'}</span>
          : <input onChange={this.onStatusChange}
                   onBlur={this.deactivateEditMode}
                   autoFocus={true}
                   type="text"
                   value={this.state.status} />
        }
      </div>
    )
  }
}

export default ProfileStatus
