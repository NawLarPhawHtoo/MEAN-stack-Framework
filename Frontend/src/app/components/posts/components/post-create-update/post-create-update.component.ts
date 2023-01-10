import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-post-create-update',
  templateUrl: './post-create-update.component.html',
  styleUrls: ['./post-create-update.component.scss']
})
export class PostCreateUpdateComponent {
  confirmView: Boolean = false;
  pageTitle: string = 'Create Post';
  buttonName: string = 'Create';
  public postForm!: FormGroup;
  public postId: any;
  public postDetail: any;
  public existingPost: any;
  public postData: any;
  public userInfo: any;
  public imgFile:any;
  public postImg:any;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      description: new FormControl('', [Validators.required]),
      photo : new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {

    this.postId = this.activatedRoute.snapshot.params["id"];

    if (this.router.url.indexOf('/post/edit') !== -1 && this.postId !== undefined) {
      this.pageTitle = 'Update Post';
      this.buttonName = 'Update';

      this.existingPost = this.activatedRoute.snapshot.data['post'];

      if (this.existingPost) {
        this.postForm.controls['title'].setValue(this.existingPost.data.title);
        this.postForm.controls['description'].setValue(this.existingPost.data.description);
        this.postForm.controls['photo'].setValue(this.existingPost.data.photo);
      }
    }
  }

  public myError = (controlName: string, errorName: string) => {
    return this.postForm.controls[controlName].hasError(errorName);
  }

  clearData() {
    if (this.confirmView == true) {
      this.postForm.controls['title'].enable();
      this.postForm.controls['description'].enable();
      this.postForm.controls['photo'].enable();
      this.confirmView = false;
    } else {
      this.postForm.reset();
    }
  }

  confirmPost() {
    if (this.confirmView == true && this.buttonName == 'Create') {
      const data: any = localStorage.getItem('userLoginData') || "";
      this.userInfo = JSON.parse(data)._id;
      const payload = {
        title: this.postForm.controls['title'].value,
        description: this.postForm.controls['description'].value,
        photo: this.postForm.controls['photo'].value,
        created_user_id: this.userInfo
      }
    }
    else if (this.confirmView == true && this.buttonName == 'Update') {
      const data: any = localStorage.getItem('userLoginData') || "";
      this.userInfo = JSON.parse(data)._id;

      const id: string = this.activatedRoute.snapshot.params['id'];
      const payload = {
        title: this.postForm.controls['title'].value,
        description: this.postForm.controls['description'].value,
        photo: this.postForm.controls['photo'].value,
        updated_user_id: this.userInfo
      }
    }

    if (this.postForm.valid) {
      this.postForm.controls['title'].disable();
      this.postForm.controls['description'].disable();
      this.postForm.controls['photo'].disable();
      this.confirmView = true;
    }
  }

  imageUpload(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imgFile = file;
      const reader = new FileReader();
      reader.onload = e => this.postImg = reader.result;
      reader.readAsDataURL(file);
    }
  }
}
