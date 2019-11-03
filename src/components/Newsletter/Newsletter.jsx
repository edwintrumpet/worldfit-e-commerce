import React from 'react';
import './Newsletter.scss';

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <h5 className='heading'>Únete a nuestra comunidad y obtén un 15% de dto</h5>
        <form action="">
          <input type="email" name="" id="" placeholder='E-mail' />
          <input type="submit" value="Registrarse"/>
        </form>
      </div>
    </section>
  );
}