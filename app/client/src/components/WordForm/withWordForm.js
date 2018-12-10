import React, {Component} from 'react'

const withSearch = (WrappedComponent) => {
    return class extends Component {
        constructor(props) {//TODO Difference here between constructor and render?
            super(props)
            const {labels} = this.props

            const values = {}
            for (let i = 0; i < labels.length; i++) {
                values[labels[i]] = ''
            }
            this.state = {values}

            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
        }

        render() {
            return <WrappedComponent onSubmit={this.handleSubmit} onChange={this.handleChange} values={this.state.values} />
        }

        handleChange(e) { // TODO Give all functions correct names
            let {values} = this.state // TODO const in function definitions
            values[e.target.name] = e.target.value
            this.setState({values})
        }

        handleSubmit(e) {
            e.preventDefault()
            let {values} = this.state,
                newValues = {},
                hasBlankField = false

            Object.keys(values).forEach(function (fieldName) {
                if (values[fieldName]) {
                    newValues[fieldName] = ''
                }
                else {
                    hasBlankField = true
                }
            })

            if (!hasBlankField) {//TODO If the value is already in the list, this must fail
                this.setState({values: newValues})
                this.props.onSubmit(values)
                document.getElementById('form').firstChild.focus()
            }
        }
    }
}

export default withSearch
