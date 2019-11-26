import React from 'react';

class AlbumList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        error: null,
        isLoaded: false,
        items: []
    };
}

componentDidMount(){
    fetch("https://albertobonora.com/feeds/wp-json/wp/v2/albums?filter[category_name]=best-of-2019")
    .then(res => res.json())
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                items: result
            });
        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
}
render(){
    const{ error, isLoaded, items } = this.state;
    const year = this.props.yearfilter;
    const headerTitle = this.props.headerTitle;
    const site = this.props.site;
    if(error){
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded){
        return <div>Loading...</div>;
    }else{
        return (
          <div className="outter-wrapper">
            <div className="container">
              <div className="headerbar">
                <div className="inner-wrapper">
                  <h3>{headerTitle}</h3>
                  <h3>{site}</h3>
                </div>
              </div>
              <div className="inner-wrapper">
                <div className="copy-wrapper">
                  <p>2019 was a hell of a year for music. We saw a bunch of debut albums along with new music from artists who returned after many years of being away from music. It also brought a variety of different genres. I guess with age you start to appreciate things a little differently and that goes with music as well. Over the years I've come to enjoy a lot more of heavier music and thus you'll see a little more metal or hard rock than previous years. Below are my top albums of the year, hope you enjoy the list and if there are some that you haven't checked out, give them a listen! Enjoy!</p>
                </div>
                <div className="albums-wrapper">
                  {items.map(item => (
                    <div className="album" data-rank={item.meta_box.rank}>
                      <div className="album-details">
                  <span className="album-number">#{item.meta_box.rank}</span>
                         <div className="album-title-artist">
                  <h3>{item.title.rendered}</h3>
                           <h4>{item.meta_box.artist}</h4>
                         </div>
                         <div className="album-cover">
                           <img src={item.meta_box.albumArt[0].full_url} alt={item.title.rendered + " - " + item.meta_box.artist} title={item.title.rendered + " - " + item.meta_box.artist} />
                         </div>
                      </div>
                    </div>  
                  ))}
                </div>
              </div>
            </div>
          </div>  
          // <ul>
            //     {items.map(item => (
            //         <li key={item.id}>
            //             Title: {item.title.rendered}
            //         </li>
            //     ))}
            // </ul>
        );
    }
}
  
  
  
  // render() {
    //     const year = this.props.yearfilter;
    //     const headerTitle = this.props.headerTitle;
    //     const site = this.props.site;
    //     return <div className="outter-wrapper">
    //         <div className="container">
    //           <div className="headerbar">
    //             <div className="inner-wrapper">
    //               <h3>{headerTitle}</h3>
    //               <h3>{site}</h3>
    //             </div>
    //           </div>
    //           <div className="inner-wrapper">
    //             <div className="copy-wrapper">
    //               <p>2019 was a hell of a year for music. We saw a bunch of debut albums along with new music from artists who returned after many years of being away from music. It also brought a variety of different genres. I guess with age you start to appreciate things a little differently and that goes with music as well. Over the years I've come to enjoy a lot more of heavier music and thus you'll see a little more metal or hard rock than previous years. Below are my top albums of the year, hope you enjoy the list and if there are some that you haven't checked out, give them a listen! Enjoy!</p>
    //             </div>
    //             <div className="albums-wrapper">
    //               <div className="album">
    //                 <div className="album-details">
    //                   <span className="album-number">#20</span>
    //                   <div className="album-title-artist">
    //                     <h3>Album Title</h3>
    //                     <h4>Album Artist</h4>
    //                   </div>
    //                   <div className="album-cover">
    //                     <img src="https://via.placeholder.com/200" />
    //                   </div>
    //                 </div>
    //                 <div className="album-review">
    //                   <div className="album-video-embed">
    //                     <div className="youtube-wrapper">
    //                       <iframe src="https://www.youtube.com/embed/deDIf-v6OK4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    //                     </div>
    //                   </div>
    //                   <div className="album-description">
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nunc nec egestas suscipit. Pellentesque ut vestibulum purus. Phasellus luctus massa ac est semper, in lacinia magna venenatis. Donec metus lorem, aliquet quis neque in, mattis viverra ex. Aliquam erat volutpat. Maecenas ultrices purus sit amet diam auctor ultricies. Ut feugiat orci vitae eros pulvinar, et porttitor enim ullamcorper. Duis erat sem, commodo ac nisl vel, interdum sagittis ipsum. Maecenas sit amet dignissim arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //                     <h4>Essential Tracks</h4>
    //                     <ul>
    //                       <li><a href="#" target="_blank" title="Track 1">Track 1</a></li>
    //                       <li>Track 2</li>
    //                       <li>Track 3</li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="album">
    //                 <div className="album-details">
    //                   <span className="album-number">#19</span>
    //                   <div className="album-title-artist">
    //                     <h3>Album Title</h3>
    //                     <h4>Album Artist</h4>
    //                   </div>
    //                   <div className="album-cover">
    //                     <img src="https://via.placeholder.com/200" />
    //                   </div>
    //                 </div>
    //                 <div className="album-review">
    //                   <div className="album-video-embed"></div>
    //                   <div className="album-description">
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nunc nec egestas suscipit. Pellentesque ut vestibulum purus. Phasellus luctus massa ac est semper, in lacinia magna venenatis. Donec metus lorem, aliquet quis neque in, mattis viverra ex. Aliquam erat volutpat. Maecenas ultrices purus sit amet diam auctor ultricies. Ut feugiat orci vitae eros pulvinar, et porttitor enim ullamcorper. Duis erat sem, commodo ac nisl vel, interdum sagittis ipsum. Maecenas sit amet dignissim arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //                     <h6>Essential Tracks</h6>
    //                     <ul>
    //                       <li>Track 1</li>
    //                       <li>Track 2</li>
    //                       <li>Track 3</li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="album">
    //                 <div className="album-details">
    //                   <span className="album-number">#18</span>
    //                   <div className="album-title-artist">
    //                     <h3>Album Title</h3>
    //                     <h4>Album Artist</h4>
    //                   </div>
    //                   <div className="album-cover">
    //                     <img src="https://via.placeholder.com/200" />
    //                   </div>
    //                 </div>
    //                 <div className="album-review">
    //                   <div className="album-video-embed"></div>
    //                   <div className="album-description">
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nunc nec egestas suscipit. Pellentesque ut vestibulum purus. Phasellus luctus massa ac est semper, in lacinia magna venenatis. Donec metus lorem, aliquet quis neque in, mattis viverra ex. Aliquam erat volutpat. Maecenas ultrices purus sit amet diam auctor ultricies. Ut feugiat orci vitae eros pulvinar, et porttitor enim ullamcorper. Duis erat sem, commodo ac nisl vel, interdum sagittis ipsum. Maecenas sit amet dignissim arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //                     <h6>Essential Tracks</h6>
    //                     <ul>
    //                       <li>Track 1</li>
    //                       <li>Track 2</li>
    //                       <li>Track 3</li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </div>

    //               <div className="album">
    //                 <div className="album-details">
    //                   <span className="album-number">#17</span>
    //                   <div className="album-title-artist">
    //                     <h3>Album Title</h3>
    //                     <h4>Album Artist</h4>
    //                   </div>
    //                   <div className="album-cover">
    //                     <img src="https://via.placeholder.com/200" />
    //                   </div>
    //                 </div>
    //                 <div className="album-review">
    //                   <div className="album-video-embed"></div>
    //                   <div className="album-description">
    //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dapibus nunc nec egestas suscipit. Pellentesque ut vestibulum purus. Phasellus luctus massa ac est semper, in lacinia magna venenatis. Donec metus lorem, aliquet quis neque in, mattis viverra ex. Aliquam erat volutpat. Maecenas ultrices purus sit amet diam auctor ultricies. Ut feugiat orci vitae eros pulvinar, et porttitor enim ullamcorper. Duis erat sem, commodo ac nisl vel, interdum sagittis ipsum. Maecenas sit amet dignissim arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //                     <h6>Essential Tracks</h6>
    //                     <ul>
    //                       <li>Track 1</li>
    //                       <li>Track 2</li>
    //                       <li>Track 3</li>
    //                     </ul>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //     </div>
    // }
}

export default AlbumList