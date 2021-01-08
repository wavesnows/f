/**
 * @description example class
 * @author xxx
 * @since 2020.01.01
 */

interface wfoption{
    force:boolean

}


 interface WFMeta{
    source: string;
    dest: string;
    option: wfoption|null;
    replace:Array<string|RegExp>;
}



export default class WF {
    public static write(): string {
      return 'hello world!'
    }
  }
  