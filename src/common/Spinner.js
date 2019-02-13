import React from 'react'
import { css, keyframes } from 'emotion';

const Spinner = ({ size, color, className }) => {
  const bouncedelay = keyframes`
    0%, 80%, 100% { 
      transform: scale(0);
    } 40% { 
      transform: scale(1.0);
    }
  `

  const spinner = {
    textAlign: 'center',
  }

  const bounceAll = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    borderRadius: '100%',
    display: 'inline-block',
    animation: `${bouncedelay} 1.4s infinite ease-in-out both`,
  }

  const bounce1 = {
    ...bounceAll,
    animationDelay: '-0.32s',
  }

  const bounce2 = {
    ...bounceAll,
    animationDelay: '-0.16s',
  }

  const bounce3 = {
    ...bounceAll,
  }

  return (
    <div className={css(spinner, className)}>
      <div className={css(bounce1)}></div>
      <div className={css(bounce2)}></div>
      <div className={css(bounce3)}></div>
    </div>
  )
};

Spinner.defaultProps = {
  size: 18,
  color: '#697EFF',
}

export default Spinner
