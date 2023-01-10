import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'return-card-scroll-list',
  templateUrl: './return-card-scroll-list.component.html',
  styleUrls: ['./return-card-scroll-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReturnCardScrollListComponent {
  // @Input() readonly returns: IReturnExtended[] = [];

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
