


export const Header = () => {
    return (
        <header>
         
         <div class="header">
            <div class="header_to d_none">
               <div class="container">
                  <div class="row">
                     <div class="col-md-6 col-sm-6">
                        <ul class="lan">
                           <li><i class="fa fa-globe" aria-hidden="true"></i> Language : <img src="images/fleg.png" alt="#"/></li>
                        </ul>
                        <form action="#" >
                           <div class="select-box">
                              <label for="select-box1" class="label select-box1"><span class="label-desc">English</span> </label>
                              <select id="select-box1" class="select">
                                 <option value="Choice 1">English</option>
                                 <option value="Choice 1">Falkla</option>
                                 <option value="Choice 2">Germa</option>
                                 <option value="Choice 3">Neverl</option>
                              </select>
                           </div>
                        </form>
                     </div>
                     <div class="col-md-6 col-sm-6 ">
                        <ul class="social_icon1">
                           <li> F0llow Us
                           </li>
                           <li> <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                           </li>
                           <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                           <li> <a href="#"> <i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                           <li> <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="header_bo">
               <div class="container">
                  <div class="row">
                     <div class="col-md-9 col-sm-7">
                        <nav class="navigation navbar navbar-expand-md navbar-dark ">
                           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                           </button>
                           <div class="collapse navbar-collapse" id="navbarsExample04">
                              <ul class="navbar-nav mr-auto">
                                 <li class="nav-item active">
                                    <a class="nav-link" href="home"> Home  </a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="gallery">Gallery</a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="service">Fence/Gate</a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="team.html">team </a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="client.html">Client</a>
                                 </li>
                                 <li class="nav-item">
                                    <a class="nav-link" href="contactform"> contact us </a>
                                 </li>
                              </ul>
                           </div>
                        </nav>
                     </div>
                     <div class="col-md-3 col-sm-5 d_none">
                        <ul class="sign">
                           <li><a href="#"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                           <li><a class="sign_btn" href="#">sign up now</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
    )
}