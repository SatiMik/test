import { useState } from 'react';
import './TablePage.css';

export default function TablePage(): JSX.Element {
    const [buttonStates, setButtonStates] = useState<{ [key: number]: boolean }>({
        0: false,
        1: false,
        2: false
    });

    const addPicture = (index: number) => {
        setButtonStates(prevStates => ({
            ...prevStates,
            [index]: !prevStates[index]
        }));
    };

    return (
        <div className="container">
            <div className="picture">
                Картинка
                <div>

                    {buttonStates[0] && (
                        <div className="dot" >
                            <div className="dot-inner">
                                *
                            </div>
                        </div>
                    )}
                    {buttonStates[1] && (
                        <div className="dot">
                            <div className="dot-inner">**</div>
                        </div>
                    )}
                    {buttonStates[2] && (
                        <div className="dot">
                            <div className="dot-inner">***</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="buttons">
                <div className="button-1" onClick={() => addPicture(0)}>
                    <button>Кнопка 1</button>
                    Текст
                </div>
                <div className="button-2" onClick={() => addPicture(1)}>
                    <button>Кнопка 2</button>
                    Текст
                </div>
                <div className="button-3" onClick={() => addPicture(2)}>
                    <button>Кнопка 3</button>
                    Текст
                </div>
            </div>
        </div>
    );
}