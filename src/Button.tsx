import {ReactNode} from "react";
import classNames from "classnames";

export function Button({color = 'default', onClick, children}: {
    color?: 'default' | 'primary',
    children: ReactNode,
    onClick?(): void;
}) {
    return <button className={classNames('inline-block whitespace-nowrap font-button leading-none hover:ring-2 ring-offset-2 ring-offset-background-light transition',
        'text-background-contrastText rounded-full py-3 px-6',
        color === 'primary' ? 'bg-primary-main ring-primary-main' : 'bg-background-dark ring-background-dark'
    )} onClick={onClick}>
        {children}
    </button>
}