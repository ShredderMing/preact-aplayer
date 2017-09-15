import { h, Component } from 'preact';
import Player from 'aplayer';

const handleAndEvent = {
  onPlay: 'play',
  onPause: 'pause',
  onCanplay: 'canplay',
  onPlaying: 'playing',
  onEnded: 'ended',
  onError: 'error'
};

class Aplayer extends Component {
  state = { control: null };
  static defaultProps = {
    autoplay: false,
    mode: 'circulation',
    mutex: false,
    narrow: false,
    preload: 'auto',
    showlrc: 0,
    theme: '#b7daff'
  };
  componentDidMount() {
    let ap = (this.state.control = new Player({
      element: this.el,
      narrow: this.props.narrow,
      autoplay: this.props.autoplay,
      showlrc: this.props.showlrc,
      mutex: this.props.mutex,
      theme: this.props.theme,
      preload: this.props.preload,
      mode: this.props.mode,
      listmaxheight: this.props.listmaxheight,
      music: this.props.music
    }));

    for (let key in handleAndEvent) {
      if (this.props[key]) {
        ap.on(handleAndEvent[key], this.props[key]);
      }
    }
  }

  render() {
    return <div class="aplayer" ref={c => (this.el = c)} />;
  }
}

export default Aplayer;
