/**
 * Datafund Consent generator & viewer
 * Licensed under the MIT license
 * Created by Markus Zevnik, Tadej Fius, �rt Ahlin
 */

import React, {Component} from "react";
import _ from "lodash";
import $ from 'jquery';
import "./ConsentViewer.css";

window.jQuery = $;
window.$ = $;
global.jQuery = $;

export default class ConsentViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data ? this.props.data : {},
            htmlData: "",
        };

        this.objectToTable = this.objectToTable.bind(this);
        this.renderHtmlTable = this.renderHtmlTable.bind(this);
    }

    componentDidMount() {
        //this.objectToTable(this.state.data);
        this.renderHtmlTable();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            data: nextProps.data
        });

        this.renderHtmlTable();
    }

    objectToTable(obj) {
        let table = $('<table>').append('<tbody>');
        for (let key in obj) {
            let tr = $('<tr>');
            let th = $('<th>').append(key);
            let td = $('<td>');
            let value;
            if (typeof (obj[key]) == 'object') {
                if (obj[key]) {
                    value = this.objectToTable(obj[key]);
                } else {
                    value = '<span class="null">null</span>';
                }
            } else if (typeof (obj[key]) == 'boolean') {
                let str = (obj[key]) ? 'true' : 'false';
                value = '<span class="boolean">' + str + '</span>';
            } else if (typeof (obj[key]) == 'string') {
                value = '<span class="string">"' + obj[key] + '"</span>';
            } else {
                value = obj[key].valueOf();
            }
            td.append(value);
            tr.append(th).append(td);
            table.append(tr);
        }
        return table;
    }


    renderHtmlTable() {
        const _this = this;

        let value = "";

        try {
            value = _this.objectToTable(this.state.data);
        } catch (e) {
            value = '<pre>' + e + '</pre>';
        }

        _this.setState({htmlData: $(value).html()})

    }


    render() {

        return (
            <div className="consentViewerContainer">


                {this.state.htmlData &&
                <div className="table-responsive">
                    <table className="table" id="container"
                           dangerouslySetInnerHTML={{__html: this.state.htmlData}}></table>
                </div>
                }


                {_.isEmpty(this.state.data) &&
                <em>Cosent Recepeit data not available.</em>
                }
            </div>
        )

    }

}
