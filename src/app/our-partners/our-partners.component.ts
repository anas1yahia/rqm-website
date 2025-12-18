import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-our-partners',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './our-partners.component.html',
  styleUrls: ['./our-partners.component.scss']
})
export class OurPartnersComponent {
  // Map downloaded images to properties for easy use in template
  logos = {
    advancedControls: 'https://www.figma.com/api/mcp/asset/2c6a9e3b-91de-4b3d-a23e-1b0bd85f0eed',
    qyd: 'https://www.figma.com/api/mcp/asset/7c112384-534f-40a2-bfa9-0dc205d440e1',
    riyadBankIcon: 'https://www.figma.com/api/mcp/asset/751b09a4-0964-40a0-ade9-9d3dec6d8845',
    riyadBankText: 'https://www.figma.com/api/mcp/asset/a6644cb3-24bb-4fcd-bb8a-dcad6e91f51e',
    misPay: 'https://www.figma.com/api/mcp/asset/6c9ff88a-e056-43f3-b05a-cdd11d1d2a22',
    qassimUniv: 'https://www.figma.com/api/mcp/asset/728f71d0-97c9-4e3f-93d4-9d66ca83ec47',
    moyasarIcon: 'https://www.figma.com/api/mcp/asset/7c7c9ced-9fe6-4291-bf7b-e9359b5f11cc',
    moyasarText: 'https://www.figma.com/api/mcp/asset/988302ec-f1e6-456f-ae26-be019679e077',
    elm: 'https://www.figma.com/api/mcp/asset/e165911f-17ca-42f7-bfd8-a0865f39620c',
    googleCloud: 'https://www.figma.com/api/mcp/asset/cfe530c0-4967-4c45-88da-8902aaf572ca',
    unifonic: 'https://www.figma.com/api/mcp/asset/86757ad2-a1b0-4e55-ae94-31b35576fc6b',
    siaj: 'https://www.figma.com/api/mcp/asset/ecdb1a35-01b0-4107-9b78-cb4050f4f94d',
    alibabaCloud: 'https://www.figma.com/api/mcp/asset/bdce6de6-1515-4cfe-80a3-b2a799b18dd1',
    stc: 'https://www.figma.com/api/mcp/asset/a87fe05b-c0fc-4ef1-a8ca-85000080c169',
    hyyakIcon: 'https://www.figma.com/api/mcp/asset/b923d75b-19b2-41f0-a693-75d35e108030',
    hyyakText: 'https://www.figma.com/api/mcp/asset/cfe93a1a-278d-46ee-905a-b3799f2d3342'
  };
}
