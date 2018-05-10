/*
PraiseButton
*/
class PraiseButton{
	constructor(praiseNum,element){
		this.praiseNum = praiseNum;
		this.element = element;
	}
	praiseAddOne(){
		this.element.click(()=>{
			$('#resultId').addClass('num');
			this.praiseNum = add(this.praiseNum);
			$('#clickNum').html(this.praiseNum);
			setTimeout(function() {
				$('#resultId').removeClass('num');
			}, 1000);
		});
	}
}

/*
 son class Thumb
*/
 class Thumb extends PraiseButton{
	constructor(num,element){
		super(num,element);
	}
}

export default {Thumb};









