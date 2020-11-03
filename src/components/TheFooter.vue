<template>
    <footer id="pageFooter">
      <hr />
      <div class="footer">
        <span>
        <p>Powered by @Mutall Data Managers</p>
        <p>CopyRight @Timchist & Company 2020</p>
        </span>
        <span>
          <ul>
            <li>Find us:</li>
            <li><img src="@/assets/images/facebook.png" alt="Facebook" />Facebook</li>
            <li><img src="@/assets/images/twitter.png" alt="Twiter" />Twiter</li>
            <li><img src="@/assets/images/whatsapp.png" alt="Whatsapp" />WhatsApp</li>
            <li><img src="@/assets/images/insta.png" alt="Instagram" />Instagram</li>
            <li><img src="@/assets/images/mail.png" alt="Mail_us" />Mail Us</li>
          </ul>
        </span>
      </div>
    </footer>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.footer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.footer span{
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: inherit;
  font-size: 14px;
}
.footer span ul{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.footer ul li{
  height: 5vh;
  display: inline-flex;
  font-size: 12px;
}
.footer ul li img{
  height: 20px;
}
</style>
