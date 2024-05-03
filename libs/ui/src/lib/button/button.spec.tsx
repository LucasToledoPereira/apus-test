import { cleanup, render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button Test Suitecase', () => {
  const click = jest.fn();
  afterEach(cleanup);
  beforeEach(() =>
    render(
      <Button text='button' click={click}/>
    )
  );

  it('Expect button text to be button', async () => {
    const button = await screen.queryByTestId('ui-button');
    expect(button?.textContent).toBe('button');
  });

  it('Expect button click event to be called', async () => {
    const button = await screen.queryByTestId('ui-button');
    button?.click()
    expect(click).toHaveBeenCalled();
  });
});
