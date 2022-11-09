import {SVGProps} from "react";

export function ArrowDownIcon(
    props: Omit<SVGProps<SVGSVGElement>, 'xmlns' | 'fill' | 'viewBox'>
) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <path id="arrow" fill="currentColor" d="M 50,100 L 0,0 L 50,30 L 100,0"/>
        </svg>
    );
}