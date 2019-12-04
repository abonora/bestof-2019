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
  createMarkup(html){
    return { __html: html };
  }
  createYoutube(youtubeid){
    var src = "https://www.youtube.com/embed/"+youtubeid;
    var fullurl = '<iframe src="'+src+'" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>';
    return this.createMarkup(fullurl);
  }
  render(){
      const{ error, isLoaded, items } = this.state;
      const year = this.props.yearfilter;
      const headerTitle = this.props.headerTitle;
      const site = this.props.site;
      
      if(error){
          return <div>Error: {error.message}</div>;
      } else if (!isLoaded){
          return <div className="lds-ripple"><div></div><div></div></div>;
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
                      <div className="album" key={item.meta_box.rank} data-rank={item.meta_box.rank}>
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
                        <div className="album-review">
                        <div className="album-video-embed">
                          <div className="youtube-wrapper">
                            <div dangerouslySetInnerHTML={this.createYoutube(item.meta_box.youtube)}/>
                          </div>
                        </div>
                        <div className="album-description">
                          <div dangerouslySetInnerHTML={this.createMarkup(item.excerpt.rendered) }/>
                          <h4>Essential Tracks</h4>
                          <ul>
                          {item.meta_box.essentialTracks.map((track, index) =>{
                            return <li key={index}><a href={track[1] != "" ? track[1] : "https://www.youtube.com/results?search_query="+item.meta_box.artist+"+"+track[0]} title={track[0]} target="_blank" >{track[0]}</a></li>
                          })}
                          </ul>
                        </div>
                      </div>
                      </div>  
                    ))}
                  </div>
                </div>
              </div>
            </div>  
          );
      }
  }
}

export default AlbumList