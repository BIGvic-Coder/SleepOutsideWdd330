import{g as i,s}from"./utils-DTA1AWa-.js";const e=document.createElement("div");e.classList.add("cart-items");document.body.appendChild(e);function d(){const n=i("so-cart")||[];if(e.innerHTML="",n.length===0){e.innerHTML="<p>Your cart is empty.</p>";return}let a=0;n.forEach((t,o)=>{const r=document.createElement("div");r.classList.add("cart-item"),r.innerHTML=`
      <img src="${t.Images.PrimaryMedium}" alt="${t.Name}" />
      <h2>${t.Name}</h2>
      <p>$${t.FinalPrice.toFixed(2)}</p>
      <button data-index="${o}">Remove</button>
    `,e.appendChild(r),a+=t.FinalPrice});const c=document.createElement("p");c.classList.add("cart-total"),c.textContent=`Total: $${a.toFixed(2)}`,e.appendChild(c),e.querySelectorAll("button").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-index");l(o)})})}function l(n){const a=i("so-cart")||[];a.splice(n,1),s("so-cart",a),d()}d();
