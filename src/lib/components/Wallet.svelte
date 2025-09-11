<script>
  const walletDetails = [
    {
      heading : "Wallet Details",
      detail : "Your wallet helps you manage payments on the platform. Add funds, post tasks, and stay in control."
    },
    {
      heading : "Deposit & Spend",
      detail : "Add money to your wallet and use it to post or accept jobs. If you have Rs500 you can post or take up jobs worth up to Rs 500"
    },
    {
      heading : "Auto Refunds",
      detail : "If a task isn’t completed as agreed, the amount is refunded back to your wallet."
    },
    {
      heading : "Easy Budgeting",
      detail : " Your wallet balance gives you a clear view of how much you can spend. No surprise charges."
    }

  ]
</script>

<section class="py-5" style=" min-height: 100vh;">
  <div class="container text-center text-white">
    {#each walletDetails as item}
      <div class="mb-4 p-4 border border-secondary rounded shadow" 
         style="background-color: #111; border-left: 5px solid #FFD700; text-align: left;">
      <h3 class="fw-bold mb-2" style="color: #FFD700;">{item.heading}</h3>
      <p class="text-white-50">
        {item.detail}
      </p>
    </div>  
    {/each}
       
  </div>
</section>
