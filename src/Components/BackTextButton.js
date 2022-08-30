import React from 'react'

import { Link } from "react-router-dom";

export default function BackTextButton(props) {
     return (
          <div>
               <Link
                    to = {props.to}
                    style = {{textDecoration: 'none', color: props.name == 'success' ? '#0089A7' : "#62A1EB", fontSize: props.fontSize}}
               >
                    {props.text}
               </Link>
          </div>
     )
}
