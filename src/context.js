import React, { Component } from "react";
import items from "./Data";

const WorkContext = React.createContext();

export default class WorkProvider extends Component {
    state = {
        works: [],
        sortedWorks: [],
        featuredWorks: [],
        loading: true,
        type: "all"
    }

    componentDidMount() {
        // this.getData();
        window.scrollTo(0,0);
        console.log("happening");
        let works = this.formatData(items);
        let featuredWorks = works.filter(work => work.featured === true);
        //
        this.setState({
          works,
          featuredWorks,
          sortedWorks: works,
          loading: false,
        });
    }

    formatData(items) {
        let tempItems = items.map(item => {
          let id = item.sys.id;
          let content = item.fields.content;
          let preview = item.fields.preview;
          let work = { ...item.fields, id, content, preview };
          return work;
        });
        return tempItems;
    }

    getWork = slug => {
        let tempWorks = [...this.state.works];
        const work = tempWorks.find(work => work.slug === slug);
        return work;
    }

    handleChange = event => {
        const value = event.target.id
        this.setState({
            type: value
        }, this.filterWorks)
    }

    filterWorks = () => {
        let {
            works, type
        } = this.state
        //all the works
        let tempWorks = [...works]
        //filter by type
        if (type !== 'all') {
            tempWorks = tempWorks.filter(work => work.type === type)
        }

        this.setState({
            sortedWorks: tempWorks
        })
    }

    render() {
        return (
            <WorkContext.Provider
                value={{
                    ...this.state,
                    getWork: this.getWork,
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </WorkContext.Provider>
        );
    }
}

const WorkConsumer = WorkContext.Consumer;

export function withWorkConsumer(Component) {
    return function ConsumerWrapper(props) {
        return <WorkConsumer>
            {value => <Component {...props} context={value} />}
        </WorkConsumer>
    }
}

export { WorkProvider, WorkConsumer, WorkContext };