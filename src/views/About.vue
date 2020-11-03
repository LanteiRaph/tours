<template>
  <div class="container">
    <div class="content">
      <div class="home">
          <h1>Welcome to Timchist Adventures</h1>
          <p>
              Timchist Adventures is a privately owned tourism business
              registered in Kenya in 2012. We are your preferred platform
              for your tour plan and adventures in Kenya.
          </p>
          <img src="@/assets/images/home.png" alt="plane" />
      </div>
      <div class="article">
          <div class="mission">
              <h2>Mission</h2>
              <p>
                To always be driven and be passionate about servicing
                the travel needs of individuals and companies in Kenya
                through commitment, integrity, and dedication of our staff
                and partners. In pursuit of enhancing our reputation, we
                pride ourselves in delivering value-added services with
                regards to traveling locally.
              </p>
          </div>
          <div class="vision">
              <h2>Vision</h2>
              <p>
                  To be the most sought after tour platform connecting
                  all key stakeholders in the tour and travel industry.
                  To utilize the expertise of highly trained tour and travel
                  experts in the industry in offering seamless personalized
                  experiences for individuals and groups interested in both
                  corporate and luxury travels.
              </p>
          </div>
          <div class="values">
              <h2>Goals</h2>
              <p>
                  To be your preferred tour and travel partner address all
                  your travel needs and desires.
                  To render services quickly and efficiently.
                  To offer a platform that helps with the effective management and
                  planning of travel needs of individuals and corporates in Kenya.
                  Adapt to the changing needs of the industry and private
                  travelers to become a major player by connecting all industry
                  stakeholders.
                  To offer cost effective packages tailor made to suit
                  needs of the broad spectrum of travelers in Kenya.
              </p>
          </div>
          <div class="goals">
              <h2>Values</h2>
              <p>
                  To apply honesty and transparency in all our dealings
                  with clients and partners alike.
              </p>
          </div>
      </div>
  </div>
  </div>
</template>
<style scoped>
.container{
    overflow: scroll;
}
  /*style the home content*/
  .content{
      width: 100%;
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto;
      justify-content: center;
      column-gap: 30px;
  }
  .home{
    width: 100%;
    background-image: url('~@/assets/images/home.png');
  }
  .home img{
    height: 30px;
  }
  h1{
      justify-self: center;
      display: flex;
      justify-content: center;
  }
  h2{
      font-size: 16px;
      display: flex;
      justify-content: center;
  }
  p{
      display: grid;
      padding: 10px;
      min-width: 0;
      font-family: sans-serif;
      font-size: 14px;
      text-align: justify;
      line-height: 2;
  }
  .vision{
      justify-self: center;
  }
  .mission{
      justify-self: center;
  }
  .goals{
      justify-self: center;
  }
  .values{
      justify-self: center;
  }
</style>
