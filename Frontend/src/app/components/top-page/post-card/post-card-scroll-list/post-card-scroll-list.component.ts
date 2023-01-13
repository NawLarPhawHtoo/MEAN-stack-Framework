import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'post-card-scroll-list',
  templateUrl: './post-card-scroll-list.component.html',
  styleUrls: ['./post-card-scroll-list.component.scss']
})
export class PostCardScrollListComponent {
  @Input() posts:any=[];

  public showScrollButton =true;
  // public readonly trackByIdFn = trackByIdFn;

  public scrollLeft(cdkVirtualScrollViewport: CdkVirtualScrollViewport): void {
    const scrollContainer = cdkVirtualScrollViewport.elementRef.nativeElement;

    scrollContainer.scrollBy({ left: -scrollContainer.offsetWidth, behavior: 'smooth' });
  }

  public scrollRight(cdkVirtualScrollViewport: CdkVirtualScrollViewport): void {
    const scrollContainer = cdkVirtualScrollViewport.elementRef.nativeElement;

    scrollContainer.scrollBy({ left: scrollContainer.offsetWidth, behavior: 'smooth' });
  }

  public onResize(cdkVirtualScrollViewport: CdkVirtualScrollViewport): void {
    cdkVirtualScrollViewport.checkViewportSize();
  }
}
