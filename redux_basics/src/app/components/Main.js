//this component is dumb and for presentation. Component folder.
//containers folder is for components that are connected to redux

import React from "react";

export const Main = (props) => {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <h1>The Main Page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button
                            className="btn btn-primary"
                            onClick={() => props.changeUsername('Anna')}>Change the Username</button>
                    </div>
                </div>
            </div>
        );
}
