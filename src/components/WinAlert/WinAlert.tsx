import { Alert } from 'antd';
import React from 'react';

type propsType = {
    restart: () => void
    setIsWin: (isWin: boolean) => void
}

export const WinAlert: React.FC<propsType> = ({setIsWin, restart}) => {

    const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setIsWin(false)
        restart()
    };

    return (
        <div>
            <Alert
                message="Вітаю, гру завершено!"
                type="success"
                closable
                onClose={onClose}
            />
        </div>
    )
}
