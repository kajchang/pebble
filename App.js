class Counter extends Pebble.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if (event.target.name === 'increment') {
            this.setState({
                value: this.state.value + 1
            });
        } else if (event.target.name === 'decrement') {
            this.setState({
                value: this.state.value - 1
            });
        }
    }

    render() {
        return Pebble.createElement(
            'div',
            null,
            'Pebble Counter #',
            this.props.number,
            Pebble.createElement('br', null),
            Pebble.createElement(
                'button',
                { name: 'decrement', onClick: this.handleClick },
                '-'
            ),
            ` ${this.state.value} `,
            Pebble.createElement(
                'button',
                { name: 'increment', onClick: this.handleClick },
                '+'
            )
        );
    }
}

App = () => Pebble.createElement(
    'div',
    null,
    Pebble.createElement(Counter, { number: 1 }),
    Pebble.createElement(Counter, { number: 2 }),
    Pebble.createElement(Counter, { number: 3 })
);

Pebble.mount(document.body, Pebble.createElement(App, null));

