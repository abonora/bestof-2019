import React from 'react';

class AlbumList extends React.Component {
    render() {
        const year = this.props.yearfilter;
        return <div className="outter-wrapper">
            <div className="container">
              <div className="headerbar">somewhere in here will be a logo and maybe progress bar and will be sticky once page is longer</div>
              <div className="inner-wrapper">
                {/* <h1>Hello {year ? year : " best albums"}</h1> */}
                <div className="copy-wrapper">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum, lectus dignissim dapibus dignissim, velit sapien aliquam eros, ultricies rutrum nisi arcu quis dolor. Integer a eros consequat, commodo arcu at, pharetra nisl. Ut nec massa ut dui aliquet rhoncus. Nulla tristique mollis orci et accumsan. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc fringilla, justo at iaculis egestas, odio tellus congue turpis, eu eleifend mi ante at mauris. Mauris eu massa tortor. Nunc consectetur maximus vehicula. Suspendisse ultricies nisl tellus, id luctus nulla pulvinar vel. Mauris egestas iaculis auctor. Nullam tempus, elit mollis pellentesque fermentum, ex orci efficitur ex, vel pulvinar velit orci at risus. Vestibulum ac nibh in ligula porta condimentum.</p>
                  <p>Duis lacinia ex lectus, eu eleifend tellus aliquam quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In posuere neque ex, vitae molestie ipsum maximus ut. Nunc vel molestie elit, nec lacinia justo. In vehicula, lorem consequat venenatis eleifend, est felis elementum felis, nec accumsan urna leo vel mauris. Duis tincidunt pharetra consectetur. Nunc eget eros arcu. Morbi vulputate sagittis ante et convallis. Ut ut ligula euismod, efficitur sapien quis, sollicitudin erat. Donec lacinia, nisi quis rutrum tempus, nisi sapien pellentesque libero, vitae sollicitudin dui turpis vel ex. Aliquam vel sapien nulla.</p>
                </div>
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