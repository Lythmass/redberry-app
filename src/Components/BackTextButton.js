import React from 'react'

import { Link } from "react-router-dom";

export default function BackTextButton(props) {
     return (
          <div>
               <Link
                    to = {props.to}
                    style = {{textDecoration: 'none', color: "#62A1EB", fontSize: props.fontSize}}
               >
                    {props.text}
               </Link>
          </div>
     )
}
