import React, {Component} from 'react';
import PropTypes from "prop-types";
import Header from '../common/Header';
import Footer from '../common/Footer';
import Posts from '../components/posts';
import Spinner from '../components/spinner';
import '../styles/App.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="content">
          <Posts/>
          <Spinner/>
        </div>
        <Footer/>
      </div>
    );
  }
}


App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

export default App;
