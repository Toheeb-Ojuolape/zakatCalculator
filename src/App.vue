<template>
<v-window v-model='step'>
  
  <v-window-item :value="1">
   <v-app>
    <v-main  style="background:#0066f5">
    <div style="margin:30% 20% 20% 20% ">
    <p style="font-size:21px" class="white--text mb-4"> <vue-typer style="color:white" text="Truly the reward of those who believe and do righteous deeds and establish Prayer and pay Zakah is with their Lord; they have no reason to entertain any fear or grief."></vue-typer> <br><br><b>-(Quran Chapter 2 vs 277)</b></p>
    <v-btn @click="step++"   block x-large style="color:#0066f5" color="white" class="mt-6 animate__animated animate__fadeInUp animate__slower animate__delay-3s"> Calculate Your Zakat</v-btn>
    </div>
    </v-main>
    </v-app>
    </v-window-item>
    <v-window-item :value="2">
    <v-app>
    <v-main>
    <div style="margin:25% 10% 10% 10%">
    <v-btn class="mb-4" @click="step--" text width="10px"><v-icon class="mr-3">mdi-arrow-left</v-icon>Back</v-btn>
    <h1 style="color:#022b69" class="mb-4">How Much cash do you have?</h1>
    <p style="font-size:14px" class="font-weight-medium">NB: This includes all money in your possession, cash and bank balance </p>
    <v-text-field prefix="₦" @keyup="nextCash()" :rules="[() => !!cash || 'This field is required']" type="number" style="height:79px" label="Enter Amount" v-model="cash"/>
    <v-btn :disabled="cashDisabled"  @click="step++" x-large style="float:right" color="#0066f5" class="white--text"> Next <v-icon>mdi-chevron-right</v-icon></v-btn>
    </div>
    </v-main>
    </v-app>
    </v-window-item>

    <v-window-item :value="3">
    <v-app>
    <v-main>
    <div style="margin:25% 10% 10% 10%">
    <v-btn class="mb-4" @click="step--" text width="10px"><v-icon class="mr-3">mdi-arrow-left</v-icon>Back</v-btn>
    <h1 style="color:#022b69" class="mb-4">Do You Own any gold or silver?</h1>
    <p style="font-size:14px" class="font-weight-medium mb-12">Whether it is worn or not, and even if it is owned by a man, Zakat should be paid on all gold and silver.  </p>
    <v-btn x-large @click="yes" :color="yescolor" class="white--text"> Yes</v-btn> <v-btn x-large style="float:right" @click="no" :color="nocolor" class="white--text"> No</v-btn>
    </div>
    </v-main>
    </v-app>
    </v-window-item>


    <v-window-item :value="4">
    <v-app>
    <v-main>
    <div style="margin:25% 10% 10% 10%">
    <v-btn class="mb-4" @click="step--" text width="10px"><v-icon class="mr-3">mdi-arrow-left</v-icon>Back</v-btn>
    <h1 style="color:#022b69" class="mb-4">How Much is your gold and/or silver worth?</h1>
    <v-text-field prefix="₦" @keyup="nextGold()" :rules="[() => !!gold || 'This field is required']" type="number" style="height:79px" label="Enter Amount" v-model="gold"/>
    <v-btn @click="step++" :disabled="goldDisabled" x-large style="float:right" color="#0066f5" class="white--text"> Next <v-icon>mdi-chevron-right</v-icon></v-btn>
    </div>
    </v-main>
    </v-app>
    </v-window-item>


    <v-window-item :value="5">
    <v-app>
    <v-main>
    <div style="margin:25% 10% 10% 10%">
    <v-btn class="mb-4" @click="step--" text width="10px"><v-icon class="mr-3">mdi-arrow-left</v-icon>Back</v-btn>
    <h1 style="color:#022b69" class="mb-4">Do You Own any shares?</h1>
    <p style="font-size:14px" class="font-weight-medium mb-12">Zakat is due on the current market value of your shares  </p>
    <v-btn x-large @click="yesShare" :color="yesShares" class="white--text"> Yes</v-btn> <v-btn x-large style="float:right" @click="noShare" :color="noShares" class="white--text"> No</v-btn>
    </div>
    </v-main>
    </v-app>
    </v-window-item>

    <v-window-item :value="6">
    <v-app>
    <v-main>
    <div style="margin:25% 10% 10% 10%">
    <v-btn class="mb-4" @click="step--" text width="10px"><v-icon class="mr-3">mdi-arrow-left</v-icon>Back</v-btn>
    <h1 style="color:#022b69" class="mb-4">What is the current market value of your shares?</h1>
    <v-text-field prefix="₦" @keyup="nextShares()" :rules="[() => !!shares || 'This field is required']" type="number" style="height:79px" label="Enter Amount" v-model="shares"/>
    <v-btn @click="step++" :disabled="sharesDisabled" x-large style="float:right" color="#0066f5" class="white--text"> Next <v-icon>mdi-chevron-right</v-icon></v-btn>
    </div>
    </v-main>
    </v-app>
    </v-window-item>


    <v-window-item :value="7">
    <v-app>
    <v-main>
    <div style="margin:25% 10% 10% 10%">
    <v-btn class="mb-4" @click="step--" text width="10px"><v-icon class="mr-3">mdi-arrow-left</v-icon>Back</v-btn>
    <h1 style="color:#022b69" class="font-weight-bold mb-4">Do you have any other Investments?</h1>
    <p style="font-size:14px" class="font-weight-medium mb-12">Zakat should be paid on the initial sum invested and any returns derived, provided it it not interest as this is considered Haraam.  </p>
    <v-btn x-large @click="yesInves" :color="yesInvest" class="white--text"> Yes</v-btn> <v-btn x-large style="float:right" @click="noInves" :color="noInvest" class="white--text"> No</v-btn>
    </div>
    </v-main>
    </v-app>
    </v-window-item>

     <v-window-item :value="8">
    <v-app>
    <v-main>
    <div style="margin:25% 10% 10% 10%">
    <v-btn class="mb-4" @click="step--" text width="10px"><v-icon class="mr-3">mdi-arrow-left</v-icon>Back</v-btn>
    <h1 style="color:#022b69" class="mb-4">What is the value of your Investments?</h1>
    <v-text-field prefix="₦" @keyup="nextInvest()" :rules="[() => !!investments || 'This field is required']" type="number" style="height:79px" label="Enter Amount" v-model="investments"/>
    <v-btn @click="step++" :disabled="investDisabled" x-large style="float:right" color="#0066f5" class="white--text"> Next <v-icon>mdi-chevron-right</v-icon></v-btn>
    </div>
    </v-main>
    </v-app>
    </v-window-item>
    

    <v-window-item :value="9">
    <v-app>
    <v-main>
    <div style="margin:25% 10% 10% 10%">
    <v-btn class="mb-4" @click="step--" text width="10px"><v-icon class="mr-3">mdi-arrow-left</v-icon>Back</v-btn>
    <h1 style="color:#022b69" class="font-weight-bold mb-4">How much is owed to you by your close friends and family?</h1>
    <p style="font-size:14px" class="font-weight-medium mb-12">If you are in doubt about when and if you will recover this debt, do not include it in this calculation. However, when the debt has been paid, it becomes eligiblee for Zakat in that year and for any previous years the debt was outstanding </p>
    <v-text-field prefix="₦" @keyup="nextDebt()" :rules="[() => !!debt || 'This field is required']" type="number" style="height:79px" label="Enter Amount" v-model="debt"/>
    <v-btn @click="step++" :disabled="debtDisabled" x-large style="float:right" color="#0066f5" class="white--text"> Next <v-icon>mdi-chevron-right</v-icon></v-btn>
    </div>
    </v-main>
    </v-app>
    </v-window-item>

    <v-window-item :value="10">
    <v-app>
    <v-main>
    <div style="margin:25% 10% 10% 10%">
    <v-btn class="mb-4" @click="step--" text width="10px"><v-icon class="mr-3">mdi-arrow-left</v-icon>Back</v-btn>
    <h1 style="color:#022b69" class="font-weight-bold mb-4">Do you owe anyone any money?</h1>
    <p style="font-size:14px" class="font-weight-medium mb-12"> Money owed should be excluded. This includes unpaid rent, utility bills, money you owe e.t.c  </p>
    <v-btn x-large @click="yesLoan" :color="yesLoans" class="white--text"> Yes</v-btn> <v-btn x-large style="float:right" @click="end()" :color="noLoans" class="white--text"> No</v-btn>
    </div>
    </v-main>
    </v-app>
    </v-window-item>


    <v-window-item :value="11">
    <v-app>
    <v-main>
    <div style="margin:25% 10% 10% 10%">
    <v-btn class="mb-4" @click="step--" text width="10px"><v-icon class="mr-3">mdi-arrow-left</v-icon>Back</v-btn>
    <h1 style="color:#022b69" class="font-weight-bold mb-4">How much do you owe?</h1>
    <v-text-field prefix="₦" @keyup="nextLoan()" :rules="[() => !!loan || 'This field is required']" type="number" style="height:79px" label="Enter Amount" v-model="loan"/>
    <v-btn @click="end()" :disabled="loanDisabled" x-large style="float:right" color="#0066f5" class="white--text"> Next <v-icon>mdi-chevron-right</v-icon></v-btn>
    </div>
    </v-main>
    </v-app>
    </v-window-item>

    <v-window-item :value="12">
    <v-app>
    <v-main style="background:#0066f5">
    <div class="text-center" style="color:white;margin:9% 12% 10% 12%">
    <div class="text-center" style="color:white" v-if="total >= 251550">
    <v-icon color="white" size="100px">mdi-check-circle</v-icon>
    <p style="color:white" class="mb-3 font-weight-bold mb-4"> You are eligible to pay Zakat!.<br> You can contribute this sum to causes you deem worthy of your Zakat.</p>
    <p style="font-size:12px;color:white"> Your Zakat amount is </p>
    <p> ₦ {{zakat}} <span style="font-size:12px;color:white">per annum </span></p>
    <p><span style="font-size:12px;color:white">Monthly payment </span> ₦ {{parseInt(zakat/12)}}</p>
    <p><span style="font-size:12px;color:white">Weekly payment </span> ₦ {{parseInt(zakat/52)}}</p>
    <v-text-field style="color:white;margin-top:150px" color="white" filled v-model='email' label="Enter your email address" />
     <flutterwave
            :is-production="isProduction"
            :name="email"
            :email="email"
            :amount="zakat"
            :reference="referenceFlutter"
            flw-key="FLWPUBK-f92a354d64f5b330062fe7928f4321f6-X"
            :callback="callbackFlutter"
            :close="close"
            currency="NGN"
            :country="country"
            :payment_method="paymentMethod"
          />
    <v-btn x-large block color="white"  width="80%" text style="margin-top:15px;text-align:center;color:#0066f5" @click="start()"> Start Again </v-btn>
    </div>
    <div class="text-center" v-else>
    <v-icon color="white" size="100px">mdi-close-circle</v-icon>
    <p style="margin-top:20px"> Sorry, you are not eligible for Zakat payment this year. The minimum amount for Zakat (Nisab) this year is <b>N251,550 or $503.1.</b> <br><br> May Allah enrich you so that you become eligible for Zakat next year.</p>
    <v-btn x-large block color="white" style="margin-top:220px;text-align:center;color:#0066f5" @click="start()"> Start Again </v-btn>
    </div>
    </div>
    </v-main>
    </v-app>
    </v-window-item>
    

  </v-window>
</template>

<script>
import { VueTyper } from 'vue-typer'
import Flutterwave from '@/components/FlutterwaveModal'

export default {
  name: 'App',

  components: {
    VueTyper,
    Flutterwave
  },

  data: () => ({
    step:1,
    cash:0,
    gold:0,
    shares:0,
    investments:0,
    debt:0,
    loan:0,
    total:0,
    zakat:0,
    cashDisabled:true,
    goldDisabled:true,
    sharesDisabled:true,
    investDisabled:true,
    debtDisabled:true,
    loanDisabled:true,
    rules: {
          required: value => !!value || 'Required.',
        },
    yescolor:'#808080',
    nocolor:'#808080',
    yesShares:"#808080",
    noShares:'#808080',
    yesInvest:"#808080",
    noInvest:"#808080",
    yesLoans:'#808080',
    noLoans:"#808080",
    flutterwaveRef: "",
    flwKey: "FLWPUBK-f92a354d64f5b330062fe7928f4321f6-X",
    currency: "NGN",
    country: "",
    paymentMethod: "",
    successUrl: window.location.href,
    cancelUrl: window.location.href,
    isProduction: "",
    email:''

  }),

  computed:{
    referenceFlutter() {
    let text = ""
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text
  },
  },

    watch: {
    flutterwaveRef() {
      this.changesInDatabase()
    },

  },

 

  methods:{
    nextCash(){
      if(this.cash != ''){
        this.cashDisabled = false
      } else{
        this.cashDisabled = true
      }
    },
     nextGold(){
      if(this.gold != ''){
        this.goldDisabled = false
      } else{
        this.goldDisabled = true
      }
    },

    nextShares(){
      if(this.shares != ''){
        this.sharesDisabled = false
      } else{
        this.sharesDisabled = true
      }
    },

    nextInvest(){
      if(this.investments != ''){
        this.investDisabled = false
      } else{
        this.investDisabled = true
      }
    },

    nextDebt(){
      if(this.debt != ''){
        this.debtDisabled = false
      } else{
        this.debtDisabled = true
      }
    },

    nextLoan(){
       if(this.loan != ''){
        this.loanDisabled = false
      } else{
        this.loanDisabled = true
      }
    },

    yes(){
      this.yescolor = '#0066f5'
      this.nocolor = '#808080'
      this.step++
    },
    no(){
       this.nocolor = '#0066f5'
       this.yescolor = '#808080'
       this.step = this.step + 2
    },

    yesShare(){
      this.yesShares = '#0066f5'
      this.noShares = '#808080'
      this.step++
    },

    yesInves(){
     this.yesInvest = '#0066f5'
      this.noInvest = '#808080'
      this.step++
    },

    noShare(){
      this.noShares = '#0066f5'
      this.yesShares = '#808080'
      this.step = this.step +2
    },

    noInves(){
      this.noInvest = '#0066f5'
      this.yesInvest = '#808080'
      this.step = this.step +2
    },

    yesLoan(){
      this.yesLoans = '#0066f5'
      this.noLoans = '#808080'
      this.step++
    },

    noLoan(){
      this.noLoans = '#0066f5'
      this.yesLoans = '#808080'
      this.step = this.step +2
    },
    end(){
      this.total = parseInt(this.cash)+ parseInt(this.investments) + parseInt(this.gold) + parseInt(this.debt) - parseInt(this.loan)
      this.zakat = 0.025 * this.total
      console.log(this.total)
      this.step = 12
    },

    start(){
      location.reload()
    },

     callbackFlutter(response) {
      this.flutterwaveRef = response.referenceFlutter
    },
    close: () => {
     alert("You closed checkout page")
     this.error = "You closed checkout page"
     this.snackbar = true
    },



  


  }
};
</script>


<style>
.vue-typer{
color:white
}
  
.custom.char {
color:white
}

p,h1,h2,h3,h4{
font-family:'Work Sans'
}

.v-btn{
text-transform:none !important
}


</style>
