import React, { Component } from 'react'

export default function WithAuth(ComponentToProtect) {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                loading = true,
                redirect: false,
            };
        };

        // componentDidMount() {

        // }

        render() { 
            <div>
        
            </div>
        }
    }
};
