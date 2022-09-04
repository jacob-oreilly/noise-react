import React, { useEffect, useRef } from 'react';
import { useState } from 'react';

const Oscillator = (props) => {
    const oscRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const { freq, type, detune, ctx, oscCount } = props;

    const oscillator = ctx.createOscillator();
    oscillator.type = type;
    oscillator.frequency.setValueAtTime(freq, ctx.currentTime); // value in hertz
    oscillator.connect(ctx.destination);
    const play = event => {
        if(playing) {
            setPlaying(false);
            console.log(playing);
        }
        else {
            setPlaying(true);
            console.log(playing);
        }
        if (playing) {
            oscillator.start();
            oscillator.connect(ctx.destination);
            console.log("connected");
        }
        else {
            oscillator.disconnect();
            console.log("not");
        }
    };
    useEffect(() => {

        const element = oscRef.current;

        element.addEventListener('click', play);

        return () => {
            element.removeEventListener('click', play);
        };
    }, [playing]);
    return (
        <div className='wrapper'>
            <button ref={oscRef} id={'osc-' + oscCount}>Oscillator {oscCount}</button>
        </div>
    );
}

export default Oscillator;