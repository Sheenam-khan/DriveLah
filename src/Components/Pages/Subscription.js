import React, { Fragment, useState, useEffect } from 'react'
import { subscriptionPlansArr } from '../../utils/data';

const Dashboard = props => {
  const subscriptionPlanData = JSON.parse(localStorage.getItem('subscription')) || {};
  const [subscriptionPlan, setSubscriptionPlan] = useState(subscriptionPlanData)
  const [error ,setError]=useState( { cardNumber: false, cvc: false, expiry: false })

  useEffect(() => {
    localStorage.setItem('subscription', JSON.stringify(subscriptionPlan));
  }, [subscriptionPlan]);
  const onChangeAtmCardDetails = (e) => {
    const plan = { ...subscriptionPlan, addCardDetails: { ...subscriptionPlan?.addCardDetails, [e.target.name]: e.target.value } }
    setSubscriptionPlan(plan)
  }
  const handleBlur = (event) => {
    
    if (event.target.value&& event.target.validity.patternMismatch) {
      setError(err=>({...err,[event.target.name]:true}));                            
    }else{
      setError(err=>({...err,[event.target.name]:false}));                            
    }
  };
  return (
    <Fragment>
      <main className="main-content">
        <h1>Subscription plan</h1>
        <p>Select the ideal subscription plan for your listing.</p>
        <section className='subscription-section'>
          <div className='subscription-plan'>
            <h3>Select your plan</h3>

            <div className="plan-selection">
              {subscriptionPlansArr?.map((item, index) => (
                <div className={`plan ${item?.subscriptionId === subscriptionPlan?.subscriptionId && 'selected-plan'}`} key={index} onClick={() => {
                  setSubscriptionPlan(item)
                }}>
                  <h3>{item.planName}</h3>
                  <ul>
                    {item.planDetails.map(((plan, planIndex) => (
                      <li key={planIndex}><span><i className={plan?.icon} /> {plan?.name} </span></li>
                    )))}
                  </ul>
                  <p className="price">{item.amount}</p>
                </div>
              ))}
            </div>
          </div>
          {subscriptionPlan.addOnSubscription?.length ? (
            <>
              <div className='subscription-addon'>
                <h3>Select add-ons for your subscription</h3>
                <div className="addons">
                  {subscriptionPlan?.addOnSubscription?.map((subscription, subscriptionIndex) =>
                  <div className="addon">
                    <label key={subscriptionIndex}>
                      {subscription?.name}
                      <input type="radio" name="selected" className='right'
                        onChange={(e) => {
                          const subscriptionplan = { ...subscriptionPlan, selected: subscription?.name }
                          setSubscriptionPlan(subscriptionplan)
                        }}
                        disabled={!subscription?.enabled}
                        checked={subscription?.name == subscriptionPlan?.selected}
                        defaultValue={subscription?.name==subscriptionPlan?.selected}
                      />
                    </label>
                    {!subscription?.enabled && <div className='coming-soon'>coming soon</div>}
                  </div>
                  )}
                </div>
              </div>
              {subscriptionPlan?.selected && subscriptionPlan?.addCardDetails &&

                <div className='subscription-carddetails'>
                  <h3>Add card details <i className='fa fa-credit-card' />
                  </h3>
                  <div className="card-details">
                    <div>
                    <input type="text"
                      placeholder="1234 5678 1234 5678"
                      maxLength={20}
                      // pattern="^(?:\d[ -]*?){13,16}$"
                      pattern='\d{4}-?\d{4}-?\d{4}-?\d{4}'
                      name="cardNumber"
                      className="card-input card-number" defaultValue={subscriptionPlan?.addCardDetails?.cardNumber} required
                      onChange={onChangeAtmCardDetails}
                      onBlur={handleBlur}
                    />
                    {error?.cardNumber &&<span className='error'>Invalid card number !</span>}
                    </div>
                    <div>
                    <input type="month"
                      name='expiry'
                      required                  
                      // pattern='/^(0[1-9]|1[0-2])\/([0-9]{2})$/g'
                      placeholder="MM/YY" className="card-input short-input expiry" defaultValue={subscriptionPlan?.addCardDetails?.expiry}
                      onChange={onChangeAtmCardDetails} 
                      onBlur={handleBlur}
                      />
                    {error?.expiry &&<span className='error'>Invalid expiry date !</span>}
                      </div>
                      <div>
                    <input type="text"
                      pattern="\d{3,4}"
                      required name='cvc' placeholder="CVC" className="card-input short-input cvv" defaultValue={subscriptionPlan?.addCardDetails?.cvc}
                      onChange={onChangeAtmCardDetails}
                      onBlur={handleBlur}
                       />
                    {error?.cvc &&<span className='error'>Invalid CVC !</span>}
                       </div>
                  </div>
                  <p className="atmcard-footer">You will not be charged right now. Subscription will only start once your listing is published and live.</p>
                </div>
              }
            </>
          ):null}
          <p>Learn more about the plans here - <a href="#">What is the right plan for me?</a></p>
        </section>
      </main>
    </Fragment>
  )
}

export default Dashboard