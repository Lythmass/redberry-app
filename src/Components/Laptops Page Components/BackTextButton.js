import React from 'react'

import { Link } from "react-router-dom";

export default function BackTextButton(props) {
     return (
          <div>
               <Link
                    to = "/workerinfo"
                    style = {{textDecoration: 'none', color: "#62A1EB"}}
               >
                    {props.text}
               </Link>
          </div>
     )
}
