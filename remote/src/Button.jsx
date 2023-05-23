import { useState } from 'react';

// import styles from './Button.module.scss';

export const Button = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <button
       className="shared-btn"
       onClick={() => setState((s) => s + 1)}
       >
        CLick me: {state}
       </button>
    </div>
  );
};

export default Button;