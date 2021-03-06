import React, { Component } from 'react';
import {Redirect, Link} from "react-router-dom";
import axios from 'axios';
import Service from './Service';
import Project from './Project';

export default class Home extends Component {

    state = {
      members: [],
    }

    componentDidMount(){
      axios.get('members')
      .then(response => {
        this.setState({
          members: response.data
        })
      }).catch(error=> {

      });
    }

    render() {

        return (
          <div>
            <Service />
            <Project />

        <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Success is the team sports</h3>
                </div>
                <div class="row">
                    { 
                      this.state.members.map((member, index) => {
                        return (
                          <div class="col-lg-4">
                              <div class="team-member">
                                  <img class="mx-auto rounded-circle" src={"http://127.0.0.1:8000/" + member.image } alt="" />
                                  <h4>{ member.title }</h4>
                                  <p class="text-muted">{ member.designation }</p>
                                  <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                  <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                  <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                              </div>
                          </div>
                        )
                      })
                    }
                </div>

            </div>
        </section>
            </div>
        );
    }
}