import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = (state) => ({video: state.currentVideo})
const mapDispatchToProps = (dispatch) => ({})

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)

export default VideoPlayerContainer;
