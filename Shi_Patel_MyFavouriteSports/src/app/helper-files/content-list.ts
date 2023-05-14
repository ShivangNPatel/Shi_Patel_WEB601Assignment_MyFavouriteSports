import { Content } from './content-interface';

export class ContentList {
  private contents: Content[];

  constructor() {
    this.contents = [];
  }

  get contentList(): Content[] {
    return this.contents;
  }

  addContent(content: Content): void {
    this.contents.push(content);
  }

  get contentCount(): number {
    return this.contents.length;
  }

  getContentHtml(index: number): string {
    const content = this.contents[index];
    const imgHtml = content.imgURL ? `<img src="${content.imgURL}" alt="${content.title}" />` : '';
    return `
      <div>
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <p>Creator: ${content.creator}</p>
        ${imgHtml}
        <p>Type: ${content.type || '-'}</p>
      </div>
    `;
  }
}