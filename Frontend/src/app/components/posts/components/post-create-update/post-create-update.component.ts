import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PostsState } from '../../store/posts/post.state';
import { AddPost, UpdatePost } from '../../store/posts/post.state.action';
import { IPostStateModel } from '../../store/posts/post.state.model';

@Component({
  selector: 'app-post-create-update',
  templateUrl: './post-create-update.component.html',
  styleUrls: ['./post-create-update.component.scss']
})
export class PostCreateUpdateComponent {

  @Select(PostsState.getSelectedPost) selectedPost: Observable<IPostStateModel>;

  confirmView: Boolean = false;
  pageTitle: string = 'Create Post';
  buttonName: string = 'Create';
  public postForm!: FormGroup;
  public postId: any;
  public postDetail: any;
  public existingPost: any;
  public postData: any;
  public userInfo: any;
  public imgFile: any;
  public postImg: any;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private store: Store) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(255)]),
      description: new FormControl('', [Validators.required]),
      photo: new FormControl('')
    });
  }

  ngOnInit(): void {

    this.postId = this.activatedRoute.snapshot.params["id"];

    if (this.postId !== undefined) {
      this.pageTitle = 'Update Post';
      this.buttonName = 'Update';

      this.selectedPost.subscribe((post: any) => {
        if (post) {
          this.postForm.controls['title'].patchValue(post.title);
          this.postForm.controls['description'].patchValue(post.description);
          this.postImg = 'http://localhost:3000/' + post.image;
        }
      })
    }
  }

  public myError = (controlName: string, errorName: string) => {
    return this.postForm.controls[controlName].hasError(errorName);
  }

  clearData() {
    this.postForm.reset();
  }

  confirmPost() {
    if (this.buttonName == 'Create') {
      const formData = new FormData();
      formData.append('title', this.postForm.controls['title'].value);
      formData.append('description', this.postForm.controls['description'].value);
      formData.append('image', this.imgFile);
      formData.append('created_user_id', '4');
      formData.append('category_id', '4');

      this.store.dispatch(new AddPost(formData)).subscribe(() => {
        this.router.navigate(['/post'])
      });
    }
    else if (this.buttonName == 'Update') {

      const formData = new FormData();
      formData.append('title', this.postForm.controls['title'].value);
      formData.append('description', this.postForm.controls['description'].value);
      this.imgFile ? formData.append('image', this.imgFile) : "";
      formData.append('created_user_id', '4');
      formData.append('category_id', '4');

      this.store.dispatch(new UpdatePost(formData, this.postId)).subscribe(() => {
        this.router.navigate(['/post'])
      });

      const id: string = this.activatedRoute.snapshot.params['id'];
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
