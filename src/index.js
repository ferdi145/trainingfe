import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';
import './index.css';

// ReactDOM.render(
//   <AppRouter />,
//   document.getElementById('root')
// );

const Apiomat = window.Apiomat
const root = document.getElementById('root')

Apiomat.Datastore.configureWithCredentials(new Apiomat.User('sales1', 'secret'))
Apiomat.Lead.getLeads('', {
  onOk: leads => {
    console.log(leads)
    const elements = leads.map(lead => {
      const img = document.createElement('img')
      img.src = lead.getProfilePicURL()

      return img
    })

    elements.forEach(element => {
      root.appendChild(element)
    });
  },
  onError: console.error
})