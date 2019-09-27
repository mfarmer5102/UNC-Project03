import React from "react";
import Liabilities from "./components/Liabilities";
import { Containers, Row, Col } from "../components";

export function LiabilitiesListItem(props) {
    return (
        <li className="list-group-item">
            <container>
                <row>
                    <col size="md-12">
                    <h1>Liabilities</h1>
                    </col>
                    <col size="md-4">
                        
                    </col>
                </row>
            </container>
        </li>
    )
}