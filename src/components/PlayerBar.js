import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
      <section id="buttons">
      <div className="btn-group" role="group" aria-label="Basic example">
<button type="button" className="btn btn-secondary"
id="previous" onClick={this.props.handlePrevClick}>
<span className="ion-skip-backward"></span>
</button>
<button type="button" className="btn btn-secondary"
id="play-pause" onClick={this.props.handleSongClick}>
<span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
</button>
<button type="button" className="btn btn-secondary"
id="next" onClick={this.props.handleNextClick}><span className="ion-skip-forward">
</span>
</button>
</div>
      
      </section>
      <section id="time-control">
      <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
         <input
           type="range"
           className="seek-bar"
           value={(this.props.currentTime / this.props.duration) || 0}
           max="1"
           min="0"
           step="0.01"
           onChange={this.props.handleTimeChange}
         />
         <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
      </section>
      <section id="volume-control">
        <div className="icon ion-volume-low" ></div>
        <input
        type="range"
        className="seek-bar"
        min ="0"
        max="1"
        step="0.01"
        value= {this.props.currentVolume}
        onChange={this.props.handleVolumeChange}
        />
        <div className="icon ion-volume-high" ></div>
      </section>
      </section>
    );
  }
}

export default PlayerBar;
