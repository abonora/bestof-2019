import React from 'react';

class AlbumList extends React.Component {
    render() {
        const year = this.props.yearfilter;
        return <div className="outter-wrapper">
            <div className="container">
              <div className="headerbar">somewhere in here will be a logo and maybe progress bar and will be sticky once page is longer</div>
              <div className="inner-wrapper">
                {/* <h1>Hello {year ? year : " best albums"}</h1> */}
                <div className="albums-wrapper">
                  <div className="album">
                    <div className="album-details">
                      <span className="album-number">#20</span>
                      <div className="album-title-artist">
                        <h3>Album Title</h3>
                        <h4>Album Artist</h4>
                      </div>
                      <div className="album-cover">
                        <img src="https://via.placeholder.com/200" />
                      </div>
                    </div>
                    <div className="album-review">
                      <div className="album-video-embed"></div>
                      <div className="album-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nunc nec egestas suscipit. Pellentesque ut vestibulum purus. Phasellus luctus massa ac est semper, in lacinia magna venenatis. Donec metus lorem, aliquet quis neque in, mattis viverra ex. Aliquam erat volutpat. Maecenas ultrices purus sit amet diam auctor ultricies. Ut feugiat orci vitae eros pulvinar, et porttitor enim ullamcorper. Duis erat sem, commodo ac nisl vel, interdum sagittis ipsum. Maecenas sit amet dignissim arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6>Essential Tracks</h6>
                        <ul>
                          <li>Track 1</li>
                          <li>Track 2</li>
                          <li>Track 3</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="album">
                    <div className="album-details">
                      <span className="album-number">#19</span>
                      <div className="album-title-artist">
                        <h3>Album Title</h3>
                        <h4>Album Artist</h4>
                      </div>
                      <div className="album-cover">
                        <img src="https://via.placeholder.com/200" />
                      </div>
                    </div>
                    <div className="album-review">
                      <div className="album-video-embed"></div>
                      <div className="album-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nunc nec egestas suscipit. Pellentesque ut vestibulum purus. Phasellus luctus massa ac est semper, in lacinia magna venenatis. Donec metus lorem, aliquet quis neque in, mattis viverra ex. Aliquam erat volutpat. Maecenas ultrices purus sit amet diam auctor ultricies. Ut feugiat orci vitae eros pulvinar, et porttitor enim ullamcorper. Duis erat sem, commodo ac nisl vel, interdum sagittis ipsum. Maecenas sit amet dignissim arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6>Essential Tracks</h6>
                        <ul>
                          <li>Track 1</li>
                          <li>Track 2</li>
                          <li>Track 3</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="album">
                    <div className="album-details">
                      <span className="album-number">#18</span>
                      <div className="album-title-artist">
                        <h3>Album Title</h3>
                        <h4>Album Artist</h4>
                      </div>
                      <div className="album-cover">
                        <img src="https://via.placeholder.com/200" />
                      </div>
                    </div>
                    <div className="album-review">
                      <div className="album-video-embed"></div>
                      <div className="album-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nunc nec egestas suscipit. Pellentesque ut vestibulum purus. Phasellus luctus massa ac est semper, in lacinia magna venenatis. Donec metus lorem, aliquet quis neque in, mattis viverra ex. Aliquam erat volutpat. Maecenas ultrices purus sit amet diam auctor ultricies. Ut feugiat orci vitae eros pulvinar, et porttitor enim ullamcorper. Duis erat sem, commodo ac nisl vel, interdum sagittis ipsum. Maecenas sit amet dignissim arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6>Essential Tracks</h6>
                        <ul>
                          <li>Track 1</li>
                          <li>Track 2</li>
                          <li>Track 3</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="album">
                    <div className="album-details">
                      <span className="album-number">#17</span>
                      <div className="album-title-artist">
                        <h3>Album Title</h3>
                        <h4>Album Artist</h4>
                      </div>
                      <div className="album-cover">
                        <img src="https://via.placeholder.com/200" />
                      </div>
                    </div>
                    <div className="album-review">
                      <div className="album-video-embed"></div>
                      <div className="album-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nunc nec egestas suscipit. Pellentesque ut vestibulum purus. Phasellus luctus massa ac est semper, in lacinia magna venenatis. Donec metus lorem, aliquet quis neque in, mattis viverra ex. Aliquam erat volutpat. Maecenas ultrices purus sit amet diam auctor ultricies. Ut feugiat orci vitae eros pulvinar, et porttitor enim ullamcorper. Duis erat sem, commodo ac nisl vel, interdum sagittis ipsum. Maecenas sit amet dignissim arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <h6>Essential Tracks</h6>
                        <ul>
                          <li>Track 1</li>
                          <li>Track 2</li>
                          <li>Track 3</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default AlbumList