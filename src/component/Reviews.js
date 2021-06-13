import React from 'react'
import femalePic from './image/femalePic.jpeg'
import malePic from './image/malePic.jpeg'
function  Reviews() {
    return(
        <div className="container">
            <div className="testimonials">
                <h1 className="title text-center">Reviews from client</h1>
                <div className="row offset-1">
                    <div className='col-md-5 Reviews'>
                        <p>When I started my business years ago, I spent a lot of money on PHCN bills and generators.
                            This was taking a large toll on me as the cost of electricity every month was already exceeding my monthly profit.
                            I was seriously searching for an alternative until an acquitiance introduced me to moskol enginnering. It was so nice partnering with them, 
                            Ever since then they have been the company in charge of both my company and home electrical systems.
                            </p>
                        <img src={malePic} alt="client-1"/>    
                        <p className="user-details"><b>Mr Caleb</b><br/>Business Owner</p>
                    </div>
                    <div className='col-md-5 Reviews'>
                        <p>
                            Before I came across Moskol enginnering, my home wiring cost me a great worry as I
                            had witness different minor fire explosion due to bad wiring connection. After I met 
                            Moskol enginnering they promised to fix the faulty aspect of my home wiring after I contacted them
                            for solar intallation of my home, which they did perfectly. Ever since then Moskol Engineering has 
                            done numerous work like installing CCTV camera,installing smart home installation for me which were all done perfectly 
                            with a very affordable budget.
                        </p>
                        <img src={femalePic} alt="client-2"/>    
                        <p className="user-details"><b>Mrs Racheal</b><br/>Home owner and mother of 2</p>
                    </div>
                </div>

            </div>
            






            {/* <div className="card mt-4">
                <div className="card-header review-heading text-center ">
                    <h5>Our Customer Reviews</h5>
                </div>
                <div className=" row card-body">
                    <div className="col-md-4">
                        <blockquote className="blockquote mb-0">
                        <p>I got Moskol Engineering to install a full set of Solar machines in my homes and it has really been amazing and smooth.</p>
                        <footer className="blockquote-footer">Mr<cite title="Source Title"> Cristiano Ronaldo</cite></footer>
                        </blockquote>
                    </div>
                    <div className="col-md-4">
                        <blockquote className="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse, voluptas dignissimos aspernatur quas qutotam exercitationem ipsum. Dolorum, deserunt soluta!.</p>
                        <footer className="blockquote-footer">Miss<cite title="Source Title"> Awosise Racheal</cite></footer>
                        </blockquote>
                    </div>
                    <div className="col-md-4">
                        <blockquote className="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Esse, voluptas dignissimos aspernatur quas qutotam exercitationem ipsum. Dolorum, deserunt soluta!.</p>
                        <footer className="blockquote-footer">Dr<cite title="Source Title"> Micheal <span><i>(phd)</i></span></cite></footer>
                        </blockquote>
                    </div>
                    
                </div> */}
            {/* </div> */}
        </div>
    )
}
export default Reviews