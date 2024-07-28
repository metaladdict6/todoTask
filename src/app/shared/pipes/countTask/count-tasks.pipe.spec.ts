import { CountTasksPipe } from './count-tasks.pipe';

describe('CountTasksPipe', () => {
  it('create an instance', () => {
    const pipe = new CountTasksPipe();
    expect(pipe).toBeTruthy();
  });
});
