class e{fetchPhoto(){console.log(this.searchQuery)}incrementPage(){this.page+=1}constructor(e){this.searchQuery=e,this.page=1}}let t=null;({form:document.querySelector(".search__form")}).form.addEventListener("submit",(function(o){o.preventDefault();const r=o.target.elements.searchQuery.value;console.log(r),t=new e(r),t.fetchPhoto()}));
//# sourceMappingURL=index.e9604138.js.map
