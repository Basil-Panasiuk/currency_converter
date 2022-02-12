import React from 'react';
import Currency from '../Currency/Currency';

type Props = {
  dollar: number;
  euro: number;
}

const Header: React.FC<Props> = ({ dollar, euro }) => {
  return (
    <div className='header'>
      <Currency code={'USD'} rate={dollar} />
      <Currency code={'EUR'} rate={euro} />
      <hr />
    </div>
  );
};

export default Header;